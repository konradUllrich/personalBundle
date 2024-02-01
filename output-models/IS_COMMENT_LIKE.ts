import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_COMMENT_LIKEAttributes {
    LID: number;
    B_LIKED?: boolean;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    LUSERID?: number;
    DTINSERT?: Date;
    REF_PROFILE_ID?: string;
    FKLID?: number;
}

@Table({
	tableName: "IS_COMMENT_LIKE",
	timestamps: false 
})
export class IS_COMMENT_LIKE extends Model<IS_COMMENT_LIKEAttributes, IS_COMMENT_LIKEAttributes> implements IS_COMMENT_LIKEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_LIKED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	FKLID?: number;

}