package com.farmkala.app.data

import com.farmkala.app.data.model.Product
import com.farmkala.app.data.remote.ApiService
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class ProductRepository(private val apiService: ApiService) {

    fun getProducts(): Flow<Result<List<Product>>> = flow {
        try {
            val response = apiService.getProducts()
            if (response.isSuccessful) {
                emit(Result.success(response.body() ?: emptyList()))
            } else {
                emit(Result.failure(Exception("Failed to fetch products: ${response.code()}")))
            }
        } catch (e: Exception) {
            emit(Result.failure(e))
        }
    }

    companion object {
        private const val BASE_URL = "https://api.farmkala.com/v1/" // Placeholder

        fun create(): ProductRepository {
            val retrofit = Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build()

            return ProductRepository(retrofit.create(ApiService::class.java))
        }
    }
}
