// src/store/ticketStore.ts
import { create } from "zustand";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: "open" | "in-progress" | "closed";
  date: string;
}

interface TicketStore {
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
  updateTicket: (updated: Ticket) => void;
  deleteTicket: (id: string) => void;
}

export const useTicketStore = create<TicketStore>((set) => ({
  tickets: [],

  addTicket: (ticket) =>
    set((state) => ({ tickets: [...state.tickets, ticket] })),

  updateTicket: (updated) =>
    set((state) => ({
      tickets: state.tickets.map((t) =>
        t.id === updated.id ? updated : t
      ),
    })),

  deleteTicket: (id) =>
    set((state) => ({
      tickets: state.tickets.filter((t) => t.id !== id),
    })),
}));
