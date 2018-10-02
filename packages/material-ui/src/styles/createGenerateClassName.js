/* eslint-disable no-underscore-dangle */
export default function createGenerateClassName(options = {}) {
  let ruleCounter = 0;

  return (rule, styleSheet) => {
    if (styleSheet.options.classNamePrefix) {
      return `${styleSheet.options.classNamePrefix}-${rule.key}`
    }
    if (styleSheet.options.name) {
      return `${styleSheet.options.name}-${rule.key}`
    }
    ruleCounter += 1;
    return `txt-${rule.key}-${ruleCounter}`
  };
}

