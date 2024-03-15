<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('goods', function (Blueprint $table) {
            $table->id();
            $table->string('productName');
            $table->string('startPrice');
            $table->string('endPrice');
            $table->string('minimumOrderQuantity');
            $table->string('maximumNumberOfSampleOrders');
            $table->string('sampleOrderDeliveryTime');
            $table->string('sampleOrderPrice');
            $table->string('productDescription');
            $table->string('time1');
            $table->string('time2');
            $table->string('time3');
            $table->string('time4');
            $table->string('time11');
            $table->string('time12');
            $table->string('time13');
            $table->string('time14');
            $table->string('option1');
            $table->string('option2');
            $table->string('option3');
            $table->string('option11');
            $table->string('option12');
            $table->string('option13');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('goods');
    }
};
