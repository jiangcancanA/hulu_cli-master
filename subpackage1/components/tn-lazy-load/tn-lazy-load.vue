<template>
  <div :class="['lazy-load-image', { loading: isLoading, error: isError }]" ref="imageContainer">
    <img v-if="!isLoading && !isError" :src="image" alt="" @load="onLoad" @error="onError" />
    <div v-if="isLoading" class="loading-indicator">Loading...</div>
    <div v-if="isError" class="error-message">Failed to load image</div>
  </div>
</template>

<script>
export default {
  name: 'LazyLoadImage',
  props: {
    index: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    threshold: {
      type: [Number, String],
      default: 100 // 默认值为100像素
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      isLoading: false,
      isError: false
    };
  },
  methods: {
    checkIntersection() {
      const rect = this.$refs.imageContainer.getBoundingClientRect();
      const thresholdValue = parseInt(this.threshold, 10);

      if (typeof thresholdValue === 'number') {
        if (thresholdValue < 0) {
          // 图片超出屏幕底部多少像素后触发
          if (rect.bottom < window.innerHeight + thresholdValue) {
            this.isLoading = true;
          }
        } else {
          // 图片顶部距离屏幕底部多少距离时触发
          if (rect.top <= window.innerHeight - thresholdValue) {
            this.isLoading = true;
          }
        }
      }
    },
    onLoad() {
      this.isLoading = false;
    },
    onError() {
      this.isLoading = false;
      this.isError = true;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkIntersection);
    this.checkIntersection(); // 初始检查
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkIntersection);
  }
}
</script>

<style scoped>
.lazy-load-image {
  width: 100%;
  height: var(--height);
  position: relative;
}

.loading-indicator, .error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loading-indicator {
  color: #ccc;
}

.error-message {
  color: red;
}
</style>