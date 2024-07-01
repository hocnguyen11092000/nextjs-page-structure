export const mapData = (data: any) => {
  return data.map((item: any) => {
    if (item.y === 0) {
      return item;
    }
    const parent = data.find(
      (d: any) => item.y > d.y && item.y - d.y === d.rows
    );
    const parentList = data.filter(
      (d: any) => item.y > d.y && item.y - d.y === d.rows
    );
    item.parentId = parent.id || null;
    item.parents =
      parentList.length > 0 ? parentList.map((item: any) => item.id) : null;
    return item;
  });
};
const data = [
  {
    cols: 8,
    id: "f375606d-fbb9-373d-566d-f9ed2d7aab0c",
    rows: 3,
    x: 0,
    y: 0,
    maxItemCols: 12,
    data: {
      label: "Banner",
      code: "BANNER_BUILDER",
      icon: "banner",
      class: "banner_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 4,
    id: "2651f418-dd0b-b168-227d-9335bbe0f56b",
    rows: 8,
    x: 8,
    y: 0,
    maxItemCols: 12,
    data: {
      label: "Assets",
      code: "ASSETS_BUILDER",
      icon: "assets",
      class: "assets_builder",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 4,
    id: "04141298-33bd-ef73-132e-e38804a6cb22",
    rows: 5,
    x: 0,
    y: 3,
    maxItemCols: 12,
    data: {
      label: "Collections",
      code: "COLLECTIONS_BUILDER",
      icon: "collections",
      class: "collections_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 4,
    id: "bae64889-9b2f-634b-95bb-4667b9053d20",
    rows: 3,
    x: 0,
    y: 8,
    maxItemCols: 12,
    data: {
      label: "Banner",
      code: "BANNER_BUILDER",
      icon: "banner",
      class: "banner_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 4,
    id: "bfce68b2-91db-a9db-a0eb-c9d85e54d729",
    rows: 5,
    x: 4,
    y: 3,
    maxItemCols: 12,
    data: {
      label: "Assets",
      code: "ASSETS_BUILDER",
      icon: "assets",
      class: "assets_builder",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
];
const data2 = [
  {
    cols: 9,
    id: "c302c62f-d17b-4229-e1b2-a5a701016972",
    rows: 2,
    x: 0,
    y: 0,
    maxItemCols: 12,
    data: {
      label: "Banner",
      code: "BANNER_BUILDER",
      icon: "banner",
      class: "banner_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 3,
    id: "2887e203-a0f9-0cae-7d95-46824cb85cfc",
    rows: 8,
    x: 9,
    y: 0,
    maxItemCols: 12,
    data: {
      label: "Assets",
      code: "ASSETS_BUILDER",
      icon: "assets",
      class: "assets_builder",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 9,
    id: "0e5f6e68-e74a-953b-5ed9-11f4a778743a",
    rows: 6,
    x: 0,
    y: 2,
    maxItemCols: 12,
    data: {
      label: "Collections",
      code: "COLLECTIONS_BUILDER",
      icon: "collections",
      class: "collections_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
];
const data3 = [
  {
    cols: 9,
    id: "c302c62f-d17b-4229-e1b2-a5a701016972",
    rows: 2,
    x: 0,
    y: 0,
    maxItemCols: 12,
    data: {
      label: "Banner",
      code: "BANNER_BUILDER",
      icon: "banner",
      class: "banner_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 3,
    id: "2887e203-a0f9-0cae-7d95-46824cb85cfc",
    rows: 8,
    x: 9,
    y: 0,
    maxItemCols: 12,
    data: {
      label: "Assets",
      code: "ASSETS_BUILDER",
      icon: "assets",
      class: "assets_builder",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 9,
    id: "0e5f6e68-e74a-953b-5ed9-11f4a778743a",
    rows: 3,
    x: 0,
    y: 2,
    maxItemCols: 12,
    data: {
      label: "Collections",
      code: "COLLECTIONS_BUILDER",
      icon: "collections",
      class: "collections_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 9,
    id: "9d5730ac-2e88-1976-a607-b3efce2a3968",
    rows: 3,
    x: 0,
    y: 5,
    maxItemCols: 12,
    data: {
      label: "Collections",
      code: "COLLECTIONS_BUILDER",
      icon: "collections",
      class: "collections_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 12,
    id: "b014f2ec-8d6e-e713-dffd-f7aadce3d377",
    rows: 4,
    x: 0,
    y: 8,
    maxItemCols: 12,
    data: {
      label: "Collections",
      code: "COLLECTIONS_BUILDER",
      icon: "collections",
      class: "collections_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
];
const data4 = [
  {
    cols: 9,
    id: "56ef8cf1-876c-f2a5-810d-665bb5444720",
    rows: 3,
    x: 0,
    y: 1,
    maxItemCols: 12,
    data: {
      label: "Banner",
      code: "BANNER_BUILDER",
      icon: "banner",
      class: "banner_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 12,
    id: "c92145fd-c9ed-0ad8-782f-4302dcbdcda3",
    rows: 1,
    x: 0,
    y: 0,
    maxItemCols: 12,
    data: {
      label: "Typography",
      code: "TYPOGRAPHY_BUILDER",
      icon: "typography",
      class: "typography_builder",
      layout: {
        cols: 10,
        rows: 1,
      },
    },
  },
  {
    cols: 3,
    id: "f5b51232-2e9a-fff8-facd-9fdf36051f92",
    rows: 6,
    x: 9,
    y: 1,
    maxItemCols: 12,
    data: {
      label: "Assets",
      code: "ASSETS_BUILDER",
      icon: "assets",
      class: "assets_builder",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 5,
    id: "0d51ea33-0227-9eca-7eb5-a1619ffe20be",
    rows: 3,
    x: 0,
    y: 4,
    maxItemCols: 12,
    data: {
      label: "Collections",
      code: "COLLECTIONS_BUILDER",
      icon: "collections",
      class: "collections_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 4,
    id: "5435db93-f115-3b2d-88ad-8f38093a6cee",
    rows: 3,
    x: 5,
    y: 4,
    maxItemCols: 12,
    data: {
      label: "Form",
      code: "FORM_BUILDER",
      icon: "form",
      class: "form_builder",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 12,
    id: "9ebdb17d-c3fa-75ca-59e4-dfb51778916f",
    rows: 3,
    x: 0,
    y: 7,
    maxItemCols: 12,
    data: {
      label: "Banner",
      code: "BANNER_BUILDER",
      icon: "banner",
      class: "banner_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
];

const data5 = [
  {
    cols: 12,
    id: "31613864-c799-95c5-f455-639ae2bf0bdf",
    rows: 2,
    x: 0,
    y: 0,
    maxItemCols: 12,
    data: {
      label: "Banner",
      code: "BANNER_BUILDER",
      icon: "banner",
      class: "banner_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 8,
    id: "4aaa57b4-db5d-5890-da08-b545c430de33",
    rows: 3,
    x: 0,
    y: 2,
    maxItemCols: 12,
    data: {
      label: "Collections",
      code: "COLLECTIONS_BUILDER",
      icon: "collections",
      class: "collections_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 4,
    id: "f380e9c2-4fc2-3bee-5c63-c489a7cd9044",
    rows: 3,
    x: 8,
    y: 2,
    maxItemCols: 12,
    data: {
      label: "Assets",
      code: "ASSETS_BUILDER",
      icon: "assets",
      class: "assets_builder",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 12,
    id: "87cba050-90c9-b23a-1bb2-37e397451547",
    rows: 2,
    x: 0,
    y: 5,
    maxItemCols: 12,
    data: {
      label: "Banner",
      code: "BANNER_BUILDER",
      icon: "banner",
      class: "banner_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 4,
    id: "c1589ccb-2916-a332-887a-f18385fd7371",
    rows: 3,
    x: 0,
    y: 7,
    maxItemCols: 12,
    data: {
      label: "Form",
      code: "FORM_BUILDER",
      icon: "form",
      class: "form_builder",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 8,
    id: "839fd6cb-656d-fd71-596d-8a600ba66adc",
    rows: 3,
    x: 4,
    y: 7,
    maxItemCols: 12,
    data: {
      label: "Collections",
      code: "COLLECTIONS_BUILDER",
      icon: "collections",
      class: "collections_builder box_border",
      layout: {
        cols: 1,
        rows: 1,
      },
    },
  },
  {
    cols: 12,
    id: "9ff68a69-b84b-5186-efea-ccbdd390a9d9",
    rows: 4,
    x: 0,
    y: 10,
    maxItemCols: 12,
    data: {
      label: "Typography",
      code: "TYPOGRAPHY_BUILDER",
      icon: "typography",
      class: "typography_builder",
      layout: {
        cols: 10,
        rows: 1,
      },
    },
  },
];

const res = mapData(data2);
export const mapRound2 = (data: any) => {
  let input = data;
  const cookData = input.reduce((acc: any, curr: any) => {
    if (curr.cols >= 12) {
      acc.push([curr]);
      input = input.filter((i: any) => i.id !== curr.id);
    }
    return acc;
  }, []);

  const arrangeByParent = [...cookData].reduce((acc: any, curr: any) => {
    const parent = input.filter((p: any) => p.parentId === curr[0].id);
    const parentWithChild = appendChildArr(parent, data);

    if (parentWithChild.length > 0) {
      acc.push(parentWithChild);
      const parentId = parentWithChild.map((p: any) => p.id);

      input = input.filter((i: any) => {
        return !parentId.includes(i.parentId) && !parentId.includes(i.id);
      });
    }

    return acc;
  }, []);

  if (input.length > 0) {
    input = appendChildArr(input, data);
  }

  const result = [input, ...cookData, ...arrangeByParent].filter(
    (item: any) => !!item.length
  );

  const maxItemCols = [...result]
    .map((r) => Math.max(...r.map((m: any) => m.y)))
    .sort((a, b) => a - b);
  const obj = result.reduce((acc, curr) => {
    acc[Math.max(...curr.map((c: any) => c.y))] = curr;
    return acc;
  }, {});
  const finalData = maxItemCols.map((m) => {
    return obj[m];
  });

  return finalData;
};

const appendChildArr = (arr: any, data: any) => {
  return arr
    .map((item: any) => {
      const children = data
        .filter(
          (d: any) =>
            (d.parents || []).includes(item.id) && item.x <= d.x && d.cols < 12
        )
        .sort((a: any, b: any) => a.y - b.y);

      item.children = children;

      return item;
    })
    .filter((f: any) => {
      if (f.cols === 12) {
        return true;
      }

      const parent = data.find((i: any) => i.id === f.parentId);

      if (parent && parent.cols === 12) {
        return true;
      }
      return !f.parents;
    });
};
console.log(mapRound2(res));
