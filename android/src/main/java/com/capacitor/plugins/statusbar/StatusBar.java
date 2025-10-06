package com.capacitor.plugins.statusbar;

import com.getcapacitor.Logger;

public class StatusBar {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
