// app config file for storing app setting related data (will not be displayed on UI)

let instance = null;

class AppConfig {
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
        this.initialize();
    }

    initialize() {
        this.currency = 'USD';
        this.prevCurrency = 'USD';
    }
}

export default new AppConfig();
