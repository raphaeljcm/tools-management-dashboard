import { columns } from './components/Columns';
import { DataTable } from './components/DataTable';
import { tools } from './constants/tools';

import helpIcon from 'src/assets/help-icon.svg';
import usersIcon from 'src/assets/users-icon.svg';
import settigsIcon from 'src/assets/settings-icon.svg';

function App() {
  return (
    <div className="grid grid-cols-[100px_auto] h-screen w-full">
      <aside className="bg-dark-blue h-full p-4 flex flex-col items-center justify-between">
        <h1 className="font-bold text-white">Tool Manager</h1>

        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <img src={helpIcon} alt="Help" />
            </li>
            <li>
              <img src={usersIcon} alt="Users" />
            </li>
            <li>
              <img src={settigsIcon} alt="Settings" />
            </li>
          </ul>
        </nav>
      </aside>

      <div className="sr-only text-red-500 bg-red-500" />
      <div className="sr-only text-green-500 bg-green-500" />
      <div className="sr-only text-yellow-500 bg-yellow-500" />

      <main className="p-10 grid grid-rows-[1fr_5fr]">
        <h2 className="font-bold text-dark-blue text-2xl text-center">
          Tool Management Dashboard
        </h2>

        <DataTable data={tools} columns={columns} />
      </main>
    </div>
  );
}

export default App;
