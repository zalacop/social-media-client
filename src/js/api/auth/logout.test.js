import { logout } from "./logout";

const mockLocalStorage = {
    getItem: jest.fn((key) => localStorage[key] || null),
    removeItem: jest.fn((key, value) => localStorage[key] = value)
  };
  
  global.localStorage = mockLocalStorage;

  describe('Logout function', () => {

    it('Removes token from the local storage', () => {
        logout();
        expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('token');
        expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('profile');
        expect(mockLocalStorage.removeItem).toHaveBeenCalledTimes(2);
    });

    it('Checks that the local storage is cleared', () => {
        expect(mockLocalStorage.getItem('token')).toBeNull();
        expect(mockLocalStorage.getItem('profile')).toBeNull();
        expect(mockLocalStorage.getItem).toHaveBeenCalledTimes(2);
    });
  })