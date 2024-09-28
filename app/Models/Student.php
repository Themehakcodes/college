<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'registration_no', 'class', 'father_name', 'mother_name', 'gender', 'dob',
        'blood_group', 'aadhar_no', 'category', 'pupil_no', 'income', 'mobile1', 'mobile2',
        'city', 'address', 'email', 'subjects', 'previous_class', 'previous_semester',
        'previous_session', 'roll_no', 'total_marks', 'obtained_marks', 'school_name', 'board',
        'student_picture', 'student_signature', 'tenth_certificate', 'twelfth_certificate',
        'character_certificate_last', 'diploma_certificate', 'character_certificate_diploma',
        'aadhar_card', 'parents_aadhar_card', 'last_semester_document', 'blood_group_report',
        'bank_passbook', 'income_certificate', 'caste_certificate'
    ];
}
