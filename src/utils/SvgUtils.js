/**
 * 加载SVG
 * @param require  传入 require.context 返回对象
 * 示例：require.context('./svg', false, /\.svg$/)
 */
function loading(require) {
    const requireAll = requireContext => {
        requireContext.keys().map(requireContext);
    }
    requireAll(require);
}

export default {
    loading
};
