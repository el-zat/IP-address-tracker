export function validateIp(ip) {
    /**
     * Validation of the entered address via regular expression pattern
     * Func test(ip) returns a copy of the text of the regular expression 
     */
    const validIpAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
    if (validIpAddressRegex.test(ip)) {
        return true
    }

    alert ('Enter a valid ip address')
    return false
}