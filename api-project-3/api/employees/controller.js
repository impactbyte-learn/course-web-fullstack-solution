const models = require("./../models")

module.exports = {
    // ---------------------------------------------------------------------------
    // GET /employees
    get: (req, res) => {
        models.employees.findAll({ limit: 100 }).then(employee => {
            if (employee === null) {
                return res.send({
                    message: "data not fund"
                })
            }

            res.send({
                data: employee
            })
        })
    },
    // ---------------------------------------------------------------------------
    // GET /employees/:emp_no
    getById: (req, res) => {
        req.params.emp_no = JSON.parse(req.params.emp_no)
        models.employees.findOne({ where: { emp_no: req.params.emp_no } }).then(employee => {
            if (employee === null) {
                return res.send({
                    message: "data not fund"
                })
            }

            res.send({
                data: employee
            })
        })
    },
    // ---------------------------------------------------------------------------
    // POST /employees
    post: (req, res) => {
        models.employees.create(req.body).then(employee => {
            res.send({
                message: "insert data success",
                data: employee
            })
        }).catch(err => res.send({
            message: "error",
            error: err
        }))
    },
    // ---------------------------------------------------------------------------
    // PUT /employees/:emp_no
    put: async (req, res) => {
        req.params.emp_no = JSON.parse(req.params.emp_no)

        models.employees.findOne({ where: { emp_no: req.params.emp_no } }).then(employee => {
            if (employee) {
                return employee.update(req.body).then(updated_employee => res.send({
                    message: "update data success",
                    data: updated_employee
                })).catch(err => Promise.reject(err))
            } else {
                res.send({
                    message: "data not found",
                })
            }
        }).catch(err => {
            res.send({
                message: "error",
                error: err
            })
        })


        // using async await
        // try {
        //     let employee = await models.employees.findOne({ where: { emp_no: req.params.emp_no } }).then(employee => employee)

        //     if (employee) {
        //         await employee.update(req.body).then(updated_employee => res.send({
        //             message: "update data success",
        //             data: updated_employee
        //         }))
        //     } else {
        //         res.send({
        //             message: "data not found",
        //         })
        //     }
        // } catch (err) {
        //     res.send({
        //         message: "error",
        //         error: err
        //     })
        // }

    },
    // ---------------------------------------------------------------------------
    // DELETE /employees/:emp_no
    deleteById: async (req, res) => {
        req.params.emp_no = JSON.parse(req.params.emp_no)

        models.employees.findOne({ where: { emp_no: req.params.emp_no } }).then(employee => {
            if (employee) {
                return employee.destroy().then(deleted_employee => res.send({
                    message: "delete data success",
                    data: deleted_employee
                })).catch(err => Promise.reject(err))
            } else {
                res.send({
                    message: "data not found",
                })
            }
        }).catch(err => {
            res.send({
                message: "error",
                error: err
            })
        })

        // using async await
        // try {
        //     let employee = await models.employees.findOne({ where: { emp_no: req.params.emp_no } }).then(employee => employee)

        //     if (employee) {
        //         await employee.destroy().then(deleted_employee => res.send({
        //             message: "delete data success",
        //             data: deleted_employee
        //         }))
        //     } else {
        //         res.send({
        //             message: "data not found",
        //         })
        //     }
        // } catch (err) {
        //     res.send({
        //         message: "error",
        //         error: err
        //     })
        // }
    },
    // ---------------------------------------------------------------------------
    // GET /employees/search
    search: (req, res) => {
        let filter = {}
        //check offset
        if (req.query.limit) {
            filter.limit = JSON.parse(req.query.limit)
        } else {
            filter.limit = 100
        }

        //check page
        if (req.query.offset) {
            filter.offset = JSON.parse(req.query.offset)
        }

        //check sort
        if (req.query.sort) {
            //get sorting from query url
            //1. split all sort query
            let splitted_sort = req.query.sort.split("_")
            console.log("after split", splitted_sort)
            //2. get last char after _ (_asc or _desc)
            let sort_by = splitted_sort[splitted_sort.length - 1]
            console.log("sort_by", sort_by)
            //3. remove last item from array
            splitted_sort.pop()
            //4. join all char before (_asc or _desc)
            console.log(splitted_sort)
            let column = splitted_sort.join("_")

            if ((sort_by === "asc") || (sort_by === "desc")) {
                //create order object and array inside 
                filter.order = []
                filter.order.push([column, sort_by])
            } else {
                return res.send({
                    message: "error",
                    error: "wrong sorting format"
                })
            }
        }

        // get filter from query parameter
        filter.where = {}
        Object.keys(req.query).map(key => {
            if (key !== "limit" && key !== "offset" && key !== "sort") {
                filter.where[key] = req.query[key]
            }
        })

        models.employees.findAndCountAll(filter).then(employee => res.send({
            filter: filter,
            data: employee
        })).catch(error => res.send({
            message: "error",
            error: error
        }))
    },
}
