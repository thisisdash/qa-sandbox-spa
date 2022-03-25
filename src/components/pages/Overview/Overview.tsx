import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StorageKeys } from '../../../consts/storageKeys';
import { getData } from '../../../helpers/registration';

type Data = {
  id: string;
  name: string;
  surname: string;
  email: string;
};

type TableRowProps = {
  data: Data;
};

const TableRow: FC<TableRowProps> = ({ data }) => (
  <tr>
    <td>{data.name}</td>
    <td>{data.surname}</td>
    <td>{data.email}</td>
    <td className='end-xs'>
      <Link to={`/registration/${data.id}`} className='btn btn--icon -primary'>
        <i className='nyc-icon nyc-icon-edit'></i>
      </Link>

      <a href='/#' className='btn btn--icon -secondary'>
        <i className='nyc-icon nyc-icon-close-cross'></i>
      </a>
    </td>
  </tr>
);

const Overview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d = getData(StorageKeys.registrations) || [];
    setData(d);
  }, []);

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
                data.map((d, i) => <TableRow key={i} data={d} />)
              ) : (
                <div className='input mt-2x'>
                  <label>No registration available!</label>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
