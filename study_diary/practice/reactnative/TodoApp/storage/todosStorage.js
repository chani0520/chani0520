import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) throw new Error('No saved todos');

      const savedTodos = JSON.parse(rawTodos);

      return savedTodos;
    } catch (e) {
      console.log('Failed to load todos');
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('Failed to save todos');
    }
  },
};

export default todosStorage;
