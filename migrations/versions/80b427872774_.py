"""empty message

Revision ID: 80b427872774
Revises: 66c128fad836
Create Date: 2019-01-04 11:15:41.417241

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '80b427872774'
down_revision = '66c128fad836'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('upwd', sa.String(length=200), nullable=True))
    op.drop_column('user', 'upsw')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('upsw', mysql.VARCHAR(length=100), nullable=True))
    op.drop_column('user', 'upwd')
    # ### end Alembic commands ###
