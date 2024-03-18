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
        Schema::create('proposals', function (Blueprint $table) {
            $table->id();
            $table->string('productName');
            $table->string('itemName');
            $table->string('contactInformation');
            $table->string('email');
            $table->string('delegatedId')->nullable();
            $table->string('userId')->nullable();
            $table->string('productManual')->nullable();
            $table->string('productDrawings')->nullable();
            $table->string('photos')->nullable();
            $table->text('others')->nullable();
            $table->boolean('productDevelopment')->default(false);
            $table->boolean('developmentProgram')->default(false);
            $table->boolean('productionQuotationSurvey')->default(false);
            $table->boolean('connectingChineseFactories')->default(false);
            $table->boolean('prototypeProduction')->default(false);
            $table->boolean('massProduction')->default(false);
            $table->boolean('importCustomsClearance')->default(false);
            $table->boolean('KC_certification')->default(false);
            $table->boolean('postEventManagement')->default(false);
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposals');
    }
};
