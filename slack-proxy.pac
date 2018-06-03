function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.slack-msgs.com")) {        
        // Use SOCK proxy, or fall back to a DIRECT traffic.
        // ssh -D 8000 [user98]@[78.47.0.100]
        return "SOCKS 127.0.0.1:8000; DIRECT";
    }

    return "DIRECT";
}
