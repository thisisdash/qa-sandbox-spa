import { FC, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RouterPrefix } from '../../../consts/router';
import { StorageKeys } from '../../../consts/storageKeys';
import { getData, saveData } from '../../../helpers/registration';

type Data = {
  id: string;
  name: string;
  surname: string;
  email: string;
};

type TableRowProps = {
  data: Data;
  setOpenModal: (id: string) => void;
};

const TableRow: FC<TableRowProps> = ({ data, setOpenModal }) => (
  <tr>
    <td>{data.name}</td>
    <td>{data.surname}</td>
    <td>{data.email}</td>
    <td className='end-xs'>
      <Link
        to={`${RouterPrefix}/registration/${data.id}`}
        className='btn btn--icon -primary'
      >
        <i className='nyc-icon nyc-icon-edit'></i>
      </Link>

      <button
        className='btn btn--icon -secondary'
        onClick={() => setOpenModal(data.id)}
      >
        <i className='nyc-icon nyc-icon-close-cross'></i>
      </button>
    </td>
  </tr>
);

const Overview = () => {
  const deleteId = useRef('');
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const d = getData(StorageKeys.registrations) || [];
    setData(d);
  }, []);

  const handleDelete = () => {
    setOpenModal(false);
    const data: Data[] = getData(StorageKeys.registrations) || [];
    const index = data?.findIndex((f) => f.id === deleteId.current);

    if (index >= 0) {
      data.splice(index, 1);
      setData(data);
      saveData(StorageKeys.registrations, data);
    }
  };

  const handleOpenModal = (id: string) => {
    deleteId.current = id;
    setOpenModal(true);
  };

  return (
    <div className='flex-row center-xs'>
      <div className='col-xs-12 col-sm-12 col-md-6'>
        <div className='card pt-2x pr-2x pb-2x pl-2x mt-4x'>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((d, i) => (
                  <TableRow key={i} data={d} setOpenModal={handleOpenModal} />
                ))
              ) : (
                <tr>
                  <td>
                    <div className='input'>
                      <label>No registration available!</label>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`modal -medium ${openModal ? '-active' : ''}`}>
        <div className='card modal__body'>
          <button className='modal__close' onClick={() => setOpenModal(false)}>
            <i className='nyc-icon nyc-icon-close-cross'></i>
          </button>
          <div className='card__body'>
            <h3 className='mb-1x'>
              Are you sure you want to delete this registration?
            </h3>
            <p className='mb-3x'>
              This will permanently delete this registration.
            </p>
            <div className='flex-row'>
              <button
                type='button'
                className='btn -primary'
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                type='button'
                className='btn -secondary'
                onClick={() => setOpenModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
