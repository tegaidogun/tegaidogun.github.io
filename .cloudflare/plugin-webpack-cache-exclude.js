export default {
  name: 'exclude-webpack-cache',
  setup: ({ onPrepare }) => {
    onPrepare(({ preparedAssets }) => {
      // Remove webpack cache files
      const keysToRemove = Object.keys(preparedAssets).filter(key => 
        key.includes('cache/webpack') || 
        key.endsWith('.pack')
      );
      
      keysToRemove.forEach(key => {
        delete preparedAssets[key];
      });
      
      return { preparedAssets };
    });
  }
}; 