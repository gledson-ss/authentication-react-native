import React, {createContext, useState, useEffect, useContext} from 'react';
import api from '../services/auth';
import auth from '../services/auth';
import AsynStorage from '@react-native-community/async-storage';
interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: User | null;
  signIn(): Promise<void>;
  signOut(): void;
}

interface User {
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
//JWT (Statetless)
export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsynStorage.getItem('@RNAuth:user');
      const storageToken = await AsynStorage.getItem('@RNAuth:token');

      if (storageUser && storageToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));

        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn() {
    /* const res = await auth.signIn(); */

    /* setUser(res.user);

    api.defaults.headers['Authorization'] = `Bearer ${res.token}`;

    await AsynStorage.setItem('@RNAuth:user', JSON.stringify(res.user));
    await AsynStorage.setItem('@RNAuth:token', res.token); */
  }

  async function signOut() {
    AsynStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
