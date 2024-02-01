import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_COMMENTAttributes {
    DTEDIT?: Date;
    STRID: string;
    TXT_COMMENT?: string;
    LUSERIDINSERT?: number;
    REF_ANSWER_ID?: string;
    LUSERID?: number;
    REF_QUESTION?: string;
    TXT_JSON?: string;
    L_DATEI?: number;
    DTINSERT?: Date;
}

@Table({
	tableName: "QU_COMMENT",
	timestamps: false 
})
export class QU_COMMENT extends Model<QU_COMMENTAttributes, QU_COMMENTAttributes> implements QU_COMMENTAttributes {

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
    	type: DataType.STRING(-1) 
    })
    	TXT_COMMENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_ANSWER_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_QUESTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_JSON?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DATEI?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}