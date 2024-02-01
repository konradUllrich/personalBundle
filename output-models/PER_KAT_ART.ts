import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_KAT_ARTAttributes {
    STR_ARTDERBESCHAEFTIGUNG?: string;
    DTINSERT?: Date;
    L_STANDARDARBEITSZEITINSEK?: number;
    L_SEKUNDEN?: number;
    LID: number;
    LUSERIDINSERT?: number;
    L_STUNDEN?: number;
    L_MINUTEN?: number;
    L_STANDARDWOCHENARBEITSZEITI?: number;
    LUSERID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "PER_KAT_ART",
	timestamps: false 
})
export class PER_KAT_ART extends Model<PER_KAT_ARTAttributes, PER_KAT_ARTAttributes> implements PER_KAT_ARTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ARTDERBESCHAEFTIGUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STANDARDARBEITSZEITINSEK?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SEKUNDEN?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STUNDEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_MINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STANDARDWOCHENARBEITSZEITI?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}