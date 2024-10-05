import { transformAtRule, transformDecl, transformRule } from './lib/transformer.mjs';

function plugin(opts = {}) {
	opts.functions = opts.functions || {}
	opts.ignoredAtRules = opts.ignoredAtRules || []
	opts.ignoredProps = opts.ignoredProps || []

	return {
		postcssPlugin: 'postcss-functions',
		AtRule(node) {
			return transformAtRule(node, opts);
		},
		Declaration(node) {
			return transformDecl(node, opts);
		},
		Rule(node) {
			return transformRule(node, opts);
		}
	}
}

plugin.postcss = true;

export default plugin;
