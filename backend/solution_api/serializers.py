from rest_framework.serializers import ModelSerializer
from .models import Solution, Comment, Like


class SolutionSerializer(ModelSerializer):
    class Meta:
        model = Solution
        fields = ["title", "instructions", "source_conc", "source_vol", "final_conc", "final_vol"]

    def create(self, validated_data):
        return Solution.objects.create(**validated_data)

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
        fields = ["__all__"]

# Probably don't need a serializer for likes since there shouldn't be a need for a user to enter info besides a "checkbox"


