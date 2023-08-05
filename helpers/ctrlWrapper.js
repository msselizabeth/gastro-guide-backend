
// const ctrlWrapper = (ctrl) => {
//     const func = async (req, res, next) => {
//         try {
//             await ctrl(req, res, next);
//         }
//         catch (error) {
//             next(error)
//         }
//     }

//     return func;
// }

// module.exports = ctrlWrapper;

const controllerWrapper = (ctrl) => {
  const wrapper = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (e) {
      console.error(e);
      next(e);
    }
  };
  return wrapper;
}

module.exports = {
  controllerWrapper
};