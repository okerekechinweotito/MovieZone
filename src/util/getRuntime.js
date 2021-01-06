const getRuntime = (time) => {
    if (time) {
        return time + ' min';
    }else{
        return 'No data';
    }
};

export default getRuntime;