import React from "react";
import "../src/styles/index.scss";

// const styles: React.CSSProperties = { textAlign: "center" };
//
// const centerDecorator = (storyFn: any) => {
//   return <div style={styles}>{storyFn()}</div>;
// };
//
// export const decorators = [centerDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1,
    },
  },
};
