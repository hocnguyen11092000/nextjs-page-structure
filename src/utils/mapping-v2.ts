export const handleMapDataWithParent = (data: any) => {
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

export const pageResult = (data: any) => {
  let input = handleMapDataWithParent(data);

  const cookData = input.reduce((acc: any, curr: any) => {
    if (curr.cols >= 12) {
      acc.push([curr]);
      input = input.filter((i: any) => i.id !== curr.id);
    }
    return acc;
  }, []);

  if (input.length > 0) {
    input = appendChildArr(input, data);
  }

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
