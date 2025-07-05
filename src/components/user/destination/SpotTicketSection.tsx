import { Ticket } from '@/types/ticket';
import TicketList from './TicketList';

export default function SpotTicketSection({ tickets }: { tickets: Ticket[] }) {
  return (
    <aside className="w-full md:w-[320px] lg:w-[320px] flex-shrink-0 md:ml-6">
      <div className="bg-white shadow-lg rounded-lg p-4 sticky top-24">
        <TicketList tickets={tickets} />
      </div>
    </aside>
  );
}
