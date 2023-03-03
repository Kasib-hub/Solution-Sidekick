from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Solution, Comment, Like

class SolutionSerializer(ModelSerializer):
    # define the new serializer property with method field
    creator_name = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()

    # make sure to add the new property to fields
    class Meta:
        model = Solution
        fields = ["id", "title", "creator_name", "created_at", "instructions", "modified",
         "source_conc", "source_vol", "final_conc", "final_vol", "creator"]

    def get_creator_name(self, obj):
        creator = obj.creator
        return creator.username

    def get_created_at(self, obj):
        return obj.created_at.strftime('%I:%M%p - %B %d, %Y')

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
    author_name = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()
    modified = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['id', 'message', 'created_at', 'modified', 'author', 'solution', 'author_name']

    def get_author_name(self, obj):
        author = obj.author
        return author.username
    
    def get_created_at(self, obj):
        return obj.created_at.strftime('%I:%M%p - %B %d, %Y')
    
    def get_modified(self, obj):
        return obj.modified.strftime('%I:%M%p - %B %d, %Y')

    def create(self, validated_data):
        instance = Comment.objects.create(
            message=validated_data['message'],
            author_id=validated_data['author'].id,
            solution_id=validated_data['solution'].id
        )
        return instance
    
    def update(self, instance, validated_data):
        instance.message = validated_data.get('message', instance.message)
        instance.save()
        return instance

class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"

# Probably don't need a serializer for likes since there shouldn't be a need for a user to enter info besides a "checkbox"


