import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_VOTESAttributes {
    L_VOTE?: number;
    LUSERID?: number;
    DTINSERT?: Date;
    STRID: string;
    REF_ANSWER_ID?: string;
    REF_USER_ID?: number;
    DTEDIT?: Date;
    REF_QUESTION_ID?: string;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "QU_VOTES",
	timestamps: false 
})
export class QU_VOTES extends Model<QU_VOTESAttributes, QU_VOTESAttributes> implements QU_VOTESAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_VOTE?: number;

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
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ANSWER_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_USER_ID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_QUESTION_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}