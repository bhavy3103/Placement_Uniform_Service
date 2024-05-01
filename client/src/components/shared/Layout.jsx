import Sidebar from './Sidebar';

export const Layout = ({ children }) => {
  return (
    <div className='flex h-[91vh]'>
      <Sidebar />
      <div className='flex-1 overflow-y-auto m-3 border rounded-lg shadow-lg bg-white p-4'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
