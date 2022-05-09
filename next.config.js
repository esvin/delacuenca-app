const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
    handleImages: ['jpeg', 'jpg', 'png'],
    images: {
      disableStaticImages: true
    }
});
