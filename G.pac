function FindProxyForURL(url, host) {
	if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
		isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
		isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
		isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")) {
		return "DIRECT";
	}
	else{
		return "DIRECT; SOCKS 100.91.32.20:7891; PROXY 10.158.1.238:7890";
	}
}