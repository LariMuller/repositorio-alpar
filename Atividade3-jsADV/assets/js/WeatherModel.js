class WeatherModel {
    _city;
    _description;
    _temp;
    _temp_min;
    _temp_max;

    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }

    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }

    get temp() {
        return this._temp;
    }
    set temp(value) {
        this._temp = value;
    }

    get temp_min() {
        return this._temp_min;
    }
    set temp_min(value) {
        this._temp_min = value;
    }

    get temp_max() {
        return this._temp_max;
    }
    set temp_max(value) {
        this._temp_max = value;
    }
}