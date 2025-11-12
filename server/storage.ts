// Frontend-only application - no storage needed
// If you need backend API endpoints in the future, add storage interface here

export interface IStorage {
  // Add CRUD methods here when needed
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
