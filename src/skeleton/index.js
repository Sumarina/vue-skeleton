import MSkeleton from './Skeleton.vue';

MSkeleton.install = function (Vue) {
    Vue.components(MSkeleton.name, MSkeleton);
}

export default MSkeleton;