<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

//use Spatie\MediaLibrary\MediaCollections\Models\Media;


class Proposal extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    
    protected $fillable = [
        'productName', 
        'itemName', 
        'contactInformation', 
        'email',
        'others',
        'productDevelopment',
        'connectingChineseFactories',
        'developmentProgram',
        'productionQuotationSurvey',
        'prototypeProduction',
        'massProduction',
        'importCustomsClearance',
        'KC_certification',
        'postEventManagement',
        "status",
        'delegatedId',
        'userId'

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')
            ->useFallbackUrl('/images/placeholder.jpg')
            ->useFallbackPath(public_path('/images/placeholder.jpg'));
    }
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($proposal) {
            $proposal->id = static::generateCustomId($proposal->user_id);
        });
    }

    private static function generateCustomId($userId)
    {
        var_dump($userId);
        $lastThreeDigits = rand(100, 999); // Generate a random 3-digit number

        $customId = str_pad($userId, 5, '0', STR_PAD_LEFT) . $lastThreeDigits;

        return $customId;
    }
}
