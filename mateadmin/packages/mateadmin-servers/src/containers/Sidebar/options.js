import { getDefaultPath } from '../../helpers/urlSync';

const options = [
  {
    label: 'sidebar.blankPage',
    key: 'blank-page',
  },
  {
    label: 'sidebar.authCheck',
    key: 'auth-check',
  },
];
const getBreadcrumbOption = () => {
  const preKeys = getDefaultPath();
  let parent, activeChildren;
  options.forEach(option => {
    if (preKeys[option.key]) {
      parent = option;
      (option.children || []).forEach(child => {
        if (preKeys[child.key]) {
          activeChildren = child;
        }
      });
    }
  });
  return { parent, activeChildren };
};
export default options;
export { getBreadcrumbOption };
