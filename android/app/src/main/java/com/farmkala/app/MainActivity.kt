package com.farmkala.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import com.farmkala.app.ui.FarmkalaWebView
import com.farmkala.app.ui.theme.FarmkalaTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            FarmkalaTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    FarmkalaWebView(
                        url = stringResource(R.string.web_app_url),
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}
