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
        "status"

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
}
