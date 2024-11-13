const array = () => {
    const data = [];

    function readArr() {
        console.log(data);
    };

    function addElement(value) {
        return data.push(value);
    };
    
    function removeElement() {
        return data.pop();
    };

    function findElement(index) {
        return data[index];
    };

    return {
        add: addElement,
        remove: removeElement,
        find: findElement,
        read: readArr,
    };
};

// const example = array();