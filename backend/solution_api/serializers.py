from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Solution, Comment, Like
from django.contrib.auth.models import User

# class WineSerializer(serializers.Serializer):
#     wine_name = serializers.CharField(max_length=120)
#     price = serializers.CharField()
#     varietal = serializers.CharField()
#     id = serializers.IntegerField()
#     created_at = serializers.DateTimeField()

class SolutionSerializer(ModelSerializer):
    # define the new serializer property with method field
    creator_name = serializers.SerializerMethodField()

    # make sure to add the new property to fields
    class Meta:
        model = Solution
        fields = ["title", "creator_name", "created_at", "instructions", "modified",
         "source_conc", "source_vol", "final_conc", "final_vol", "creator"]

    def get_creator_name(self, obj):
        creator = obj.creator
        return creator.username

    def create(self, validated_data):
        instance = Solution.objects.create(
            title=validated_data['title'],
            instructions=validated_data['instructions'],
            source_conc=validated_data['source_conc'],
            source_vol=validated_data['source_vol'],
            final_conc=validated_data['final_conc'],
            final_vol=validated_data['final_vol'],
            creator=validated_data['creator']
        )
        return instance
        

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.instructions = validated_data.get('instructions', instance.instructions)
        instance.source_conc = validated_data.get('source_conc', instance.source_conc)
        instance.source_vol = validated_data.get('source_vol', instance.source_vol)
        instance.final_conc = validated_data.get('final_conc', instance.final_conc)
        instance.final_vol = validated_data.get('final_vol', instance.final_vol)
        instance.save()
        return instance

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ["message"]

        def create(self, validated_data):
            return Comment.objects.create(**validated_data)
        
        def update(self, instance, validated_date):
            instance.message = validated_date.get('message', instance.message)

class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"

# Probably don't need a serializer for likes since there shouldn't be a need for a user to enter info besides a "checkbox"


