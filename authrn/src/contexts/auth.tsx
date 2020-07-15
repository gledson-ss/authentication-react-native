import React, {createContext, useState, useEffect} from 'react';
import * as auth from '../services/auth';
import AsynStorage from '@react-native-community/async-storage';
interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
//JWT (Statetless)
export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsynStorage.getItem('@RNAuth:user');
      const storageToken = await AsynStorage.getItem('@RNAuth:token');

      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn() {
    const res = await auth.signIn();

    setUser(res.user);
    await AsynStorage.setItem('@RNAuth:user', JSON.stringify(res.user));
    await AsynStorage.setItem('@RNAuth:token', res.token);
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

export default AuthContext;
