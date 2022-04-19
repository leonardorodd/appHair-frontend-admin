// Pega a estratégia de storage padrão do ambiente atual (web)
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'apphair',
      storage: storage,
      whitelist: ['auth', 'alert'],
    },
    reducers,
  );

  return persistedReducer;
};
