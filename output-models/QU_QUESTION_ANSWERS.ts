import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_QUESTION_ANSWERSAttributes {
    LUSERIDINSERT?: number;
    STRID: string;
    DTEDIT?: Date;
    REF_USER_ID?: number;
    B_HELPFULL?: boolean;
    FKSTRID?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    L_DATEI?: number;
    TXT_ANSWER?: string;
    TXT_ANSWER_MEDIA?: string;
}

@Table({
	tableName: "QU_QUESTION_ANSWERS",
	timestamps: false 
})
export class QU_QUESTION_ANSWERS extends Model<QU_QUESTION_ANSWERSAttributes, QU_QUESTION_ANSWERSAttributes> implements QU_QUESTION_ANSWERSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_USER_ID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_HELPFULL?: boolean;

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
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_DATEI?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_ANSWER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_ANSWER_MEDIA?: string;

}