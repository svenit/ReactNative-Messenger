const Validator = {
    errors: [],
    bindingContext: {},
    make: function(values, object) {
        this.errors = [];
        for (let i in object) {
            let eachObject = object[i];
            this.bindingContext[eachObject.attribute] = this.getAttributeName(eachObject);
            let parseValidate = eachObject.validate.split('|');
            for (let j in parseValidate) {
                if (parseValidate[j].indexOf('required') > -1) {
                    if (!values[eachObject.attribute] || !values[eachObject.attribute].trim()) {
                        this.addErrors({
                            message: `${this.getAttributeName(eachObject)} không được để trống`
                        });
                    }
                }
                if (parseValidate[j].indexOf('same:') > -1) {
                    let regex = eachObject.validate.match(/(same:)+[a-zA-Z]+/);
                    if (regex[0]) {
                        let [key, elementSameKey] = regex[0].split(':');
                        if (values[eachObject.attribute] != values[elementSameKey]) {
                            this.addErrors({
                                message: `${this.getAttributeName(eachObject)} phải có giá trị bằng ${this.bindingContext[elementSameKey]}`
                            });
                        }
                    }
                }
            }
        }
    },
    getAttributeName: function(validateObject) {
        return validateObject.text || validateObject.attribute;
    },
    fails: function() {
        return this.errors.length > 0;
    },
    first: function() {
        return this.errors[0] || null;
    },
    getErrors: function() {
        return this.errors;
    },
    addErrors: function(errors) {
        if (Array.isArray(errors)) {
            for (let i in errors) {
                this.addErrors(errors[i]);
            }
            return;
        }
        this.errors.push(errors);
    }
}

export default Validator;