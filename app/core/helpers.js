function isMd5(str) {
    const md5Regex = /^[a-fA-F0-9]{32}$/;
    return md5Regex.test(str);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate random index
        let j = Math.floor(Math.random() * (i + 1));

        // Swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value) {
    return Array.isArray(value);
}

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function isString(value) {
    return typeof value === 'string';
}

function isUndefinedOrNull(value) {
    return value === undefined || value === null;
}

angular.lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
};

angular.isUndefinedOrNull = function(val) {
    return angular.isUndefined(val) || val === null;
};

function generateUUID() {
    const uuidBytes = new Uint8Array(16);
    crypto.getRandomValues(uuidBytes);

    uuidBytes[6] = (uuidBytes[6] & 0x0f) | 0x40; // Version 4
    uuidBytes[8] = (uuidBytes[8] & 0x3f) | 0x80; // Variant

    const hexDigits = [];
    for (let i = 0; i < 256; i++) {
        hexDigits[i] = (i + 0x100).toString(16).substr(1);
    }

    let uuidString = '';
    for (let i = 0; i < 16; i++) {
        uuidString += hexDigits[uuidBytes[i]];
    }

    return uuidString;
}

function parseUserAgent() {

    const userAgent = navigator.userAgent;

    const regexes = {
        browser: /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+(\.\d+)?)/i,
        os: /(android|webos|iphone|ipad|ipod|blackberry|windows phone)/i,
        device: /(mobile)/i,
        manufacturer: /\b(iphone|ipad|ipod|android|blackberry|windows phone)\b/i,
        brand: /(\b(?!like )\S*?(?!build|\) applewebkit))\b/i
    };

    const result = {
        browser: 'Unknown',
        version: 'Unknown',
        os: 'Unknown',
        device: 'Desktop',
        manufacturer: 'Unknown',
        brand: 'Unknown'
    };

    const browserMatch = userAgent.match(regexes.browser);
    if (browserMatch && browserMatch.length >= 3) {
        result.browser = browserMatch[1];
        result.version = browserMatch[2];
    }

    const osMatch = userAgent.match(regexes.os);
    if (osMatch) {
        result.os = osMatch[1];
    }

    const deviceMatch = userAgent.match(regexes.device);
    if (deviceMatch) {
        result.device = 'Mobile';
    }

    const manufacturerMatch = userAgent.match(regexes.manufacturer);
    if (manufacturerMatch) {
        result.manufacturer = manufacturerMatch[1];
    }

    const brandMatch = userAgent.match(regexes.brand);
    if (brandMatch) {
        result.brand = brandMatch[1];
    }

    return result;
}

function isBase64(str) {
    // Check if the string length is a multiple of 4
    if (str.length % 4 !== 0) {
        return false;
    }

    // Check if the string contains invalid characters
    if (!/^([A-Za-z0-9+/=])+$/i.test(str)) {
        return false;
    }

    // Check if the string has the correct padding
    if (/=/.test(str)) {
        const paddingIndex = str.indexOf('=');
        const paddingLength = str.length - paddingIndex;

        // If padding exists, it should be at the end and consist of 1 or 2 characters
        if (paddingLength !== 1 && paddingLength !== 2) {
            return false;
        }

        // Check if the padding is followed by valid characters
        if (/=[^=]/.test(str) || /==[^=]/.test(str)) {
            return false;
        }
    }

    return true;
}

function removeArrayRecord(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
        arr.splice(objWithIdIndex, 1);
    }

    return arr;
}