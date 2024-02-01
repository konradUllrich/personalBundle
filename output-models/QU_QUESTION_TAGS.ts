import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_QUESTION_TAGSAttributes {
    FKSTRID?: string;
    DTINSERT?: Date;
    REF_TAG_ID?: string;
    DTEDIT?: Date;
    STRID: string;
    LUSERIDINSERT?: number;
    LUSERID?: number;
}

@Table({
	tableName: "QU_QUESTION_TAGS",
	timestamps: false 
})
export class QU_QUESTION_TAGS extends Model<QU_QUESTION_TAGSAttributes, QU_QUESTION_TAGSAttributes> implements QU_QUESTION_TAGSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_TAG_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}