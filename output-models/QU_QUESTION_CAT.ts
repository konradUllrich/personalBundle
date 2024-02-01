import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_QUESTION_CATAttributes {
    LID: number;
    FKSTRID?: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    STR_ID?: string;
    DTINSERT?: Date;
    DTEDIT?: Date;
}

@Table({
	tableName: "QU_QUESTION_CAT",
	timestamps: false 
})
export class QU_QUESTION_CAT extends Model<QU_QUESTION_CATAttributes, QU_QUESTION_CATAttributes> implements QU_QUESTION_CATAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}